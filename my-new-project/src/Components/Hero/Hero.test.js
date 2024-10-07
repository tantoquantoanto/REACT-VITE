import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { SearchContext } from '../ResearchTools/ResearchTools';
import { LightModeProvider } from '../../utilities/LighMode';

const mockBooks = [
  { asin: '123', title: 'Book 1', category: 'Category 1', img: 'book1.jpg', price: '10' },
  { asin: '456', title: 'Book 2', category: 'Category 2', img: 'book2.jpg', price: '15' },
];

const renderWithContext = (contextValue) => {
  return render(
    <LightModeProvider>
      <SearchContext.Provider value={contextValue}>
        <Hero />
      </SearchContext.Provider>
    </LightModeProvider>
  );
};

describe('Hero Component', () => {
  it('should render a book when allBooks is not empty', () => {
    renderWithContext({ allBooks: mockBooks });

    expect(screen.getByText('BEST SELLER')).toBeInTheDocument();
    expect(screen.getByText('Book 1')).toBeInTheDocument();
    expect(screen.getByText('CATEGORY 1')).toBeInTheDocument(); // Example for category
    expect(screen.getByText('Acquistalo a 10 €')).toBeInTheDocument(); // Example for price
  });

  it('should not render anything when allBooks is empty', () => {
    renderWithContext({ allBooks: [] });

    expect(screen.queryByTestId('heroTest')).not.toBeInTheDocument();
  });
});
