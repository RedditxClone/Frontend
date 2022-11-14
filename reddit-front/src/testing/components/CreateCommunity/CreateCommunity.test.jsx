import { fireEvent, render, screen } from '@testing-library/react';
import CreateCommunity from '../../../components/CreateCommunity/CreateCommunity';

let open = true;
const setOpen = (value) => {
  open = value;
};

describe('Test for Create Community Card', () => {
  it('Test for rendering the card', () => {
    setOpen(true);
    render(
      <CreateCommunity
        open={open}
        setOpen={setOpen}
      />
    );
    const nameElement = screen.getByText(
      /Community names including capitalization cannot be changed./i
    );
    const communityType = screen.getByText(/Community Type/i);
    const AdultContent = screen.getByText(/Adult Content/i);
    const privateLabel = screen.getByText(/Private/i);
    const publicLabel = screen.getByText(/Public/i);
    const restrictedLabel = screen.getByText(/Restricted/i);
    const cancelButton = screen.getByText(/Cancel/i);

    expect(cancelButton).toBeInTheDocument();
    expect(privateLabel).toBeInTheDocument();
    expect(publicLabel).toBeInTheDocument();
    expect(restrictedLabel).toBeInTheDocument();
    expect(AdultContent).toBeInTheDocument();
    expect(communityType).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
  });

  it('Test Showing Error when the name field is empty', () => {
    setOpen(true);

    render(
      <CreateCommunity
        open={open}
        setOpen={setOpen}
      />
    );
    const inputNameElement = screen.getByDisplayValue('');
    fireEvent.focus(inputNameElement);
    fireEvent.blur(inputNameElement);
    const errorElement = screen.getByText(/A community name is required/i);
    expect(errorElement).toBeInTheDocument();
  });

  it('Test Hiding the error when the name field is changed', () => {
    setOpen(true);

    render(
      <CreateCommunity
        open={open}
        setOpen={setOpen}
      />
    );
    const inputNameElement = screen.getByDisplayValue('');
    fireEvent.focus(inputNameElement);
    fireEvent.blur(inputNameElement);
    fireEvent.change(inputNameElement, { target: { value: 'Ahly' } });
    const errorElement = screen.queryByText(/A community name is required/i);
    expect(errorElement).toBeNull();
  });

  it('Test the count of remaining possible chracters', () => {
    setOpen(true);

    render(
      <CreateCommunity
        open={open}
        setOpen={setOpen}
      />
    );
    const inputNameElement = screen.getByDisplayValue('');
    fireEvent.change(inputNameElement, { target: { value: 'ahmed' } });
    const countCharsElement = screen.getByText(/16 Characters remaining/i);
    expect(countCharsElement).toBeInTheDocument();
  });

  it('Test For invalid community name', () => {
    setOpen(true);

    render(
      <CreateCommunity
        open={open}
        setOpen={setOpen}
      />
    );
    const inputNameElement = screen.getByDisplayValue('');
    fireEvent.change(inputNameElement, { target: { value: 'ahmed/-+' } });
    fireEvent.blur(inputNameElement);
    const errorCommunityName = screen.getByText(
      /Community names must be between 3–21 characters, and can only contain letters, numbers, or underscores./i
    );
    expect(errorCommunityName).toBeInTheDocument();
  });

  // it('Test For close the card when click on cancel button', () => {
  //   setOpen(true);

  //   render(
  //     <CreateCommunity
  //       open={open}
  //       setOpen={setOpen}
  //     />
  //   );
  //   const cancelButton = screen.getByText(/Cancel/i);
  //   fireEvent.click(cancelButton);

  //   expect(screen.queryByText(/Create Community/i)).toBeNull();
  // });
});
