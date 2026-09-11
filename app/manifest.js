export default function manifest() {
  return {
    name: "Entrain Culinary Academy",
    short_name: "Entrain Academy",
    description: "Practical Chef-Led Culinary Courses & Bakery Training in Manjeri, Kerala",
    start_url: "/",
    display: "standalone",
    background_color: "#0f1f30",
    theme_color: "#b8863f",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
