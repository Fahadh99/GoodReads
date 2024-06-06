import React from 'react';

const BookDetails = () => {
  // Fetch book details using useParams or other method
  const book = {
    title: 'Book Title',
    author: 'Author Name',
    description: 'Book description...',
    coverImage: 'https://example.com/book.jpg',
    averageRating: 4.5,
    reviews: [
      { id: 1, user: 'User1', rating: 5, comment: 'Great book!' },
      { id: 2, user: 'User2', rating: 4, comment: 'Enjoyed reading it.' },
      // Add more reviews
    ]
  };

  return (
    <div>
      <h2>{book.title}</h2>
      <div>
        <img src={book.coverImage} alt="Book Cover" />
        <p>Author: {book.author}</p>
        <p>Description: {book.description}</p>
        <p>Average Rating: {book.averageRating}</p>
        <h3>Reviews</h3>
        {book.reviews.map(review => (
          <div key={review.id}>
            <p>User: {review.user}</p>
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookDetails;
