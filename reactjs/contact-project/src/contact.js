const contacts = [
  {
    name: "Beyonce",
    imgURL:
      "data:image/jpeg;base64,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",
    phone: "+123 456 789",
    email: "b@beyonce.com",
  },
  {
    name: "Jack Bauer",
    imgURL:
      "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg",
    phone: "+987 654 321",
    email: "jack@nowhere.com",
  },
  {
    name: "Chuck Norris",
    imgURL:
      "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png",
    phone: "+918 372 574",
    email: "gmail@chucknorris.com",
  },
];

export default contacts;
