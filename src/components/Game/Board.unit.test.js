import { render, screen } from '@testing-library/react';
import Board from './Board';

// Does it render what it's supposed to?

describe('Board component renders', () => {
  test('when NO attempts or gameplay', () => {
    // Arrange
    render(<Board attempts={['', '', '', '', '', '']} codle={'array'} status={[]} turn={0} />);

    // Act

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toBeInTheDocument();
  });
  test('when attempts and gameplay', () => {
    // Arrange
    render(
      <Board
        attempts={['error', '', '', '', '', '']}
        codle={'array'}
        status={[['-incorrect', '-correct', '-correct', '-incorrect', '-incorrect']]}
        turn={1}
      />,
    );

    // Act

    // Assert
    const rowElements = screen.getAllByRole('application', { name: 'game-row' });
    rowElements.forEach((el) => expect(el).toBeInTheDocument());
  });
});

// Does it handle user interactions correctly?

// Move this into an integration test folder at the root level
/* describe('Board behaves correctly when', () => {
  test('user attempts to key in >5 characters', () => {
    // Arrange
    render(<Board />);

    // Act
    userEvent.keyboard('errorrrr');

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toHaveTextContent('error');
  });
  test('user attempts to click in >5 characters', () => {
    // Arrange
    render(<Game />);

    // Act
    userEvent.click(screen.getByRole('application', { name: '' }));

    // Assert
    const boardElement = screen.getByRole('application', { name: 'game-board' });
    expect(boardElement).toHaveTextContent('error');
  });
});
 */

// Does it handle success and failure cases on state changes?
