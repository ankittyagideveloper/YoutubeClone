import linkedInProfile from "../assets/linkedInProfile.jpg";

export const AdvInfo = {
  thumbnail: { linkedInProfile },
  snippet: {
    channelTitle: "Let's connect on LinkedIN 😊",
    title: "Ankit Tyagi",
    description: "",
    thumbnails: { medium: { url: linkedInProfile } },
  },
};

export const mockComments = [
  {
    image:
      "data:image/jpeg;base64,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",
    name: "Ankit Tyagi",
    text: "Hello",
    replies: [
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqyC24C50oL_qcw1OqpWdRlFmDY3NRIjZzeM4KsEHg&s",
        name: "Anju Tyagi",
        text: "Hello Ankit",
        replies: [
          {
            image:
              "data:image/jpeg;base64,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",
            name: "Ankit Tyagi",
            text: "Hello Anju",
            replies: [],
          },
        ],
      },
      {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1p196FdFnjs53-qod0Iv6TbQwPWf3M4yZTRbJHH9KQ&s",
        name: "Shweta Tyagi",
        text: "Hello Ankit!!",
        replies: [
          {
            image:
              "data:image/jpeg;base64,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",
            name: "Ankit Tyagi",
            text: "Hello Shweta",
            replies: [
              {
                image:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1p196FdFnjs53-qod0Iv6TbQwPWf3M4yZTRbJHH9KQ&s",
                name: "Shweta Tyagi",
                text: "Kya kar rha hai Bro!",
                replies: [
                  {
                    image:
                      "data:image/jpeg;base64,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",
                    name: "Ankit Tyagi",
                    text: "Nested Comments bana rha hoon!!",
                    replies: [
                      {
                        image:
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1p196FdFnjs53-qod0Iv6TbQwPWf3M4yZTRbJHH9KQ&s",
                        name: "Shweta Tyagi",
                        text: "Awesome, Keep up the good work!",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1p196FdFnjs53-qod0Iv6TbQwPWf3M4yZTRbJHH9KQ&s",
    name: "Shweta Tyagi",
    text: "Hello Ankit!!",
    replies: [],
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1p196FdFnjs53-qod0Iv6TbQwPWf3M4yZTRbJHH9KQ&s",
    name: "Anand Tyagi",
    text: "Hello Ankit!!",
    replies: [],
  },
];
