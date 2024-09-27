export default function Home() {
  interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    read: boolean;
  }

  // const books: Book[] = [];

  const books = [
    {
      id: "bi4u3fo34278gf",
      title: "Gravity's Rainbow",
      author: "Thomas Pynchon",
      genre: "Post Modern Novel",
      read: true,
    },
    {
      id: "bgn9845hg93bvf",
      title: "Vineland",
      author: "Thomas Pynchon",
      genre: "Post Modern Novel",
      read: false,
    },
    {
      id: "gn3uov7584vb40",
      title: "White Noise",
      author: "Don Delilo",
      genre: "Post Modern Novel",
      read: false,
    },
    {
      id: "fnire04j98287b",
      title: "Cosmopolis",
      author: "Don Delilo",
      genre: "Post Modern Novel",
      read: false,
    },
    {
      id: "t348902hbvyub",
      title: "Infinite Jest",
      author: "David Foster Wallace",
      genre: "Post Modern Novel",
      read: true,
    },
  ];

  return (
    <main className="booklist">
      <h1>Booklist</h1>
      <div className="p-4">Add Book Component</div>
      <div className="p-4">Filter by Read Component</div>
      <div className="container mx-auto">
        <h3>list of books</h3>

        {books.map((book) => (
          <div key={book.id} className="card p-4 border-2 rounded">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.read ? "Read" : "Not Read"}</p>
          </div>
        ))}
      </div>
      <div className=""></div>
    </main>
  );
}
