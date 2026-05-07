from typing import List

class Book:
    def __init__(self, title: str, author: str):
        self.title = title
        self.author = author

    def describe(self) -> str:
        return f"'{self.title}' by {self.author}"

def find_book(books: List[Book], title: str) -> Book | None:
    for book in books:
        if book.title.lower() == title.lower():
            return book
    return None

# Example usage
library = [
    Book("1984", "George Orwell"),
    Book("Brave New World", "Aldous Huxley"),
    Book("Fahrenheit 451", "Ray Bradbury"),
]

book = find_book(library, "1984")
if book:
    print("Found:", book.describe())
else:
    print("Book not found.")
