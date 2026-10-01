export const blogPosts = [
  {
    slug: "how-to-choose-a-culinary-course",
    title: "How to Choose a Culinary Course That Fits Your Goal",
    category: "Culinary training",
    excerpt: "A practical way to compare workshops and longer programs before you commit your time and money.",
    image: "/images/cooking.webp",
    imageAlt: "Chef working in a professional kitchen",
    courseHref: "/courses",
    sections: [
      {
        heading: "Start with the outcome you want",
        paragraphs: [
          "A useful course choice begins with a clear goal. Someone hoping to explore a new interest may need a focused workshop. Someone preparing for a kitchen role or planning a bakery may benefit from a longer program with repeated practice. Write down what you want to be able to do after training, then compare courses against that goal.",
          "Look beyond the course title. Read the topics covered, the duration and the type of work you will do. A short class can introduce a technique or product range; a longer course can leave more room to practise, make mistakes and improve. Neither format is automatically better. The right one depends on the skill you need next.",
        ],
      },
      {
        heading: "Ask how the learning happens",
        paragraphs: [
          "Check whether the course is hands-on, demonstration-based or a mix of both. In a hands-on session, you can build confidence by performing the steps yourself. In a demonstration, you may cover more examples and spend more time asking questions about method, costing or equipment. Knowing the format beforehand helps you arrive with the right expectations.",
          "It is also worth asking about class size, equipment access, language, prerequisites and what you can take home afterward. If your aim is employment, ask how the training relates to real kitchen routines. If your aim is business, ask how the course addresses consistency, preparation time and costs.",
        ],
      },
      {
        heading: "Choose your next step, not your final destination",
        paragraphs: [
          "You do not need to master every cuisine at once. Choose a course that addresses your most immediate gap, then build on it. A beginner might start with a workshop to test an interest. A working cook may choose a focused class to add one product line. A future entrepreneur may need to combine kitchen skills with practical business planning.",
          "Before enrolling, compare the syllabus with your goal and speak with the training team about any uncertainty. A good match should give you a clear picture of what you will learn, how you will practise and what to work on next.",
        ],
      },
    ],
  },
  {
    slug: "make-the-most-of-a-one-day-cooking-workshop",
    title: "How to Make the Most of a One-Day Cooking Workshop",
    category: "Workshop guide",
    excerpt: "A little preparation can help you leave a short workshop with techniques you can actually repeat.",
    image: "/images/dessert.webp",
    imageAlt: "Dessert prepared for culinary training",
    courseHref: "/courses/dessert-workshop",
    sections: [
      {
        heading: "Prepare a short list of questions",
        paragraphs: [
          "One-day workshops move quickly. Before you arrive, look at the syllabus and write down a few things you most want to understand. You might ask why an ingredient is added at a particular stage, how to judge doneness, or which steps can be prepared in advance. Specific questions are easier for an instructor to answer than a general request for every possible tip.",
          "If you hope to use the recipes in a café or small food business, include questions about portion size, ingredient storage and repeatability. Those practical details matter just as much as the final presentation.",
        ],
      },
      {
        heading: "Pay attention to decisions, not only steps",
        paragraphs: [
          "A recipe tells you what to do; a workshop can help you understand why. Notice the texture, temperature and timing cues the chef uses to decide when to move on. Watch how ingredients are measured, equipment is organised and problems are corrected. These observations help when your own kitchen, ingredients or batch size differ from the demonstration.",
          "Take brief notes in your own words. Record the details you are likely to forget, such as a visual cue or an adjustment the chef made. If photography is allowed, a few useful images can support your notes, but stay engaged with the teaching rather than trying to capture every moment.",
        ],
      },
      {
        heading: "Repeat one thing soon afterward",
        paragraphs: [
          "The strongest follow-up is a small practice session. Pick one technique or recipe from the workshop and repeat it while the lesson is fresh. Compare the result with your notes, identify one change to make, and try again. This turns a busy day of new information into a skill you can use.",
          "If the workshop was demonstration-based, practise at home or at work as soon as you can. If it was hands-on, repeat the process without the instructor beside you. Either way, keep a record of what changed and what worked.",
        ],
      },
    ],
  },
  {
    slug: "food-business-skills-before-you-open",
    title: "Food Business Skills to Practise Before You Open",
    category: "Food business",
    excerpt: "Great flavour matters, but a dependable food business also needs consistent preparation, clear costs and workable routines.",
    image: "/images/pizza_burger.png",
    imageAlt: "Pizza and burger dishes prepared for culinary training",
    courseHref: "/courses/pizza-burger-workshop",
    sections: [
      {
        heading: "Make a small menu repeatable",
        paragraphs: [
          "A new menu is easier to manage when you start with a few items you can make well every time. Test each item more than once, using written quantities and a clear preparation sequence. Note the time needed, the equipment used and where delays happen. A dish that works beautifully once should also work during a busy service.",
          "Ask someone else to follow your process and compare the result. If the flavour, portion or appearance changes substantially, your method needs more detail. Consistency makes training easier and helps customers know what to expect.",
        ],
      },
      {
        heading: "Understand the cost of every portion",
        paragraphs: [
          "Before setting a selling price, calculate the ingredients used in one portion and include packaging where relevant. Keep a separate record of larger operating costs, such as labour, rent, utilities and delivery fees. Ingredient cost alone does not tell you whether an item can support the business.",
          "Prices and portions can change, so revisit your calculations regularly. If a product is too expensive to make at the price customers will pay, consider its portion, ingredients or preparation method before adding it to the menu.",
        ],
      },
      {
        heading: "Practise the routine around the recipe",
        paragraphs: [
          "Cooking is only one part of service. Work through how ingredients are received, stored, prepared, cooked and handed to the customer. Keep food safety and cleaning procedures clear for everyone involved. A simple checklist can reveal gaps before they become daily problems.",
          "A small trial service can teach you a great deal. Prepare a limited menu, time the work and collect honest feedback on the food and the experience. Use what you learn to improve the process before increasing the number of orders or menu items.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
