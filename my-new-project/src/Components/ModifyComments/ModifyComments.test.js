import '@testing-library/jest-dom';
import 'jest-fetch-mock';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ModifyComments from './ModifyComments'; // Assicurati che il percorso sia corretto
import { MemoryRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const mockHandleUpdateComment = jest.fn();

const renderWithProps = (props) => {
  return render(
    <MemoryRouter>
      <ModifyComments {...props} />
    </MemoryRouter>
  );
};

describe('ModifyComments Component', () => {
  beforeEach(() => {
    fetch.resetMocks(); // Resetta i mock di fetch prima di ogni test
  });

  it('should display loading spinner when submitting the form', async () => {
    const props = {
      isChangeVisible: true,
      setIsChangeVisible: jest.fn(),
      id: '1',
      handleUpdateComment: mockHandleUpdateComment,
    };

    renderWithProps(props);

    fireEvent.change(screen.getByPlaceholderText('Cambia il tuo commento'), {
      target: { value: 'Nuovo commento' },
    });
    fireEvent.change(screen.getByPlaceholderText('Cambia il tuo rate'), {
      target: { value: 4 },
    });

    // Mock della risposta fetch
    fetch.mockResponseOnce(JSON.stringify({}));

    // Simula il submit
    fireEvent.submit(screen.getByRole('form'));

    expect(screen.getByRole('alert')).not.toBeInTheDocument(); // Assicurati che l'alert non sia presente

    // Aspetta che il caricamento sia completato
    await waitFor(() => expect(screen.queryByRole('alert')).toBeNull());
  });

  it('should display an error message when there is an error', async () => {
    const props = {
      isChangeVisible: true,
      setIsChangeVisible: jest.fn(),
      id: '1',
      handleUpdateComment: mockHandleUpdateComment,
    };

    // Mock della funzione fetch per simulare un errore
    fetch.mockReject(new Error('Network Error'));

    renderWithProps(props);

    fireEvent.change(screen.getByPlaceholderText('Cambia il tuo commento'), {
      target: { value: 'Nuovo commento' },
    });
    fireEvent.change(screen.getByPlaceholderText('Cambia il tuo rate'), {
      target: { value: 4 },
    });

    fireEvent.submit(screen.getByRole('form'));

    // Aspetta che il messaggio di errore venga visualizzato
    await waitFor(() => expect(screen.getByText('Oops, qualcosa è andato storto...')).toBeInTheDocument());
  });

  it('should call handleUpdateComment when the form is submitted successfully', async () => {
    const props = {
      isChangeVisible: true,
      setIsChangeVisible: jest.fn(),
      id: '1',
      handleUpdateComment: mockHandleUpdateComment,
    };

    // Mock della risposta fetch
    fetch.mockResponseOnce(JSON.stringify({ id: '1', comment: 'Nuovo commento', rate: 4 }));

    renderWithProps(props);

    fireEvent.change(screen.getByPlaceholderText('Cambia il tuo commento'), {
      target: { value: 'Nuovo commento' },
    });
    fireEvent.change(screen.getByPlaceholderText('Cambia il tuo rate'), {
      target: { value: 4 },
    });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => expect(mockHandleUpdateComment).toHaveBeenCalled());
  });

  it('should close modal when clicking "Annulla Modifica"', () => {
    const props = {
      isChangeVisible: true,
      setIsChangeVisible: jest.fn(),
      id: '1',
      handleUpdateComment: mockHandleUpdateComment,
    };

    renderWithProps(props);

    fireEvent.click(screen.getByText('Annulla Modifica'));

    expect(props.setIsChangeVisible).toHaveBeenCalled();
  });
});
