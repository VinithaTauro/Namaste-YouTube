const commentsData = [
  {
    name: "Vinitha",
    text: "testing comments",
    replies: [
      {
        name: "Vinitha",
        text: "testing comments",
        replies: [],
      },
      {
        name: "Vinitha",
        text: "testing comments",
        replies: [
          {
            name: "Vinitha",
            text: "testing comments",
            replies: [
              {
                name: "Vinitha",
                text: "testing comments",
                replies: [],
              },
              {
                name: "Vinitha",
                text: "testing comments",
                replies: [],
              },
            ],
          },
          {
            name: "Vinitha",
            text: "testing comments",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Test 1",
    text: "testing comments",
    replies: [
      {
        name: "Vinitha",
        text: "testing comments",
        replies: [],
      },
    ],
  },
  {
    name: "Test 2",
    text: "testing comments",
    replies: [],
  },
  {
    name: "Test 3",
    text: "testing comments",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex flex-row p-2  shadow-sm bg-gray-100 rounded-lg my-2">
      <div className="w-8 m-2 ">
        <img
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
        />
      </div>
      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, i) => (
    <div key={i}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div>
      <div className="px-4">
        <h1 className="font-bold text-2xl">Comments</h1>
        <CommentList comments={commentsData} />
      </div>
    </div>
  );
};

export default CommentContainer;
