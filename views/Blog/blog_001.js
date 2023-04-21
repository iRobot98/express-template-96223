const blog_ = document.getElementById("root");
const blogs = {
  data: [],
};

fetch("/api/blogs/blogs-list")
  .then((res) => res.json())
  .then((v) => (blogs.data = v))
  .then(() => loadRoot());

/*
{
    "id": 1,
    "title": "7 CSS tools you should be using ",
    "category": "development",
    "subCategory": ["frontend", "ui/ux", "design"],
    "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "authorName": "John Doe",
    "authorAvatar": "/assets/images/author.jpg",
    "createdAt": "June 03, 2021",
    "cover": "/assets/images/designer-1.jpg"
  },
*/

const item = (
  blogItem = {
    id: 1,
    title: "7 CSS tools you should be using ",
    category: "development",
    subCategory: ["frontend", "ui/ux", "design"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: "John Doe",
    authorAvatar: "/assets/images/author.jpg",
    createdAt: "June 03, 2021",
    cover: "/assets/images/designer-1.jpg",
  }
) => {
  return `
    <div class="">${blogItem.createdAt}</div>
    <div class=""> <img class="" src="${blogItem.cover}" alt="cover" /> </div>
      <h1 class=""> ${blogItem.title} </h1>
     <div class="">
     ${[blogItem.category, ...blogItem.subCategory].map(
       (v) => `
        <div class="">${v} </div>
        `
     )}
     </div>
     <div class=""> ${blogItem.authorName} </div>
     <div class=""> ${blogItem.description} </div>
    `;
};

async function loadRoot() {
  console.log(blogs);
  blog_.innerHtml = `<div class="">${blogs.data
    .filter((v, i) => i < 1)
    .map(item)} </div> `;
}
