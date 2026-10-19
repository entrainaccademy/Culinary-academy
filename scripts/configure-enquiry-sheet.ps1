param(
  [Parameter(Mandatory = $true)]
  [string]$CredentialPath
)

$projectRoot = Split-Path -Parent $PSScriptRoot
$envPath = Join-Path $projectRoot '.env.local'

if (-not (Test-Path -LiteralPath $envPath)) {
  throw 'Missing .env.local with GOOGLE_SHEET_ID. Create it before running this script.'
}

$sheetLine = Get-Content -LiteralPath $envPath | Where-Object { $_ -match '^GOOGLE_SHEET_ID=' } | Select-Object -First 1
$sheetId = ($sheetLine -split '=', 2)[1].Trim()
if (-not $sheetId) { throw 'GOOGLE_SHEET_ID is missing from .env.local.' }

$credentials = Get-Content -Raw -LiteralPath $CredentialPath | ConvertFrom-Json
if ($credentials.type -ne 'service_account' -or -not $credentials.client_email -or -not $credentials.private_key) {
  throw 'The selected file is not a Google service-account JSON key.'
}

$escapedKey = $credentials.private_key.Replace("`r", '').Replace("`n", '\n')
@(
  "GOOGLE_SHEET_ID=$sheetId"
  "GOOGLE_SERVICE_ACCOUNT_EMAIL=$($credentials.client_email)"
  "GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY=$escapedKey"
) | Set-Content -LiteralPath $envPath -Encoding utf8

Write-Output 'Local enquiry credentials configured. Keep the JSON key and .env.local private.'
Write-Output "Share the enquiry Sheet with $($credentials.client_email) as Editor."
