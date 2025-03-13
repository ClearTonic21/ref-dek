import IconName from './Icon.enum';
import './IconButton.css'

function IconButton({name = IconName.Empty, onIconClick}: {name: IconName, onIconClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void}) {

  switch(name) {
    case IconName.Edit:
      return (
        <button onClick={onIconClick} className="icon-button" role={IconName.Edit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="size-4 fill-white/30"
          >
            <path
              fill-rule="evenodd"
              d="M11.013 2.513a1.75 1.75 0 0 1 2.475 2.474L6.226 12.25a2.751 2.751 0 0 1-.892.596l-2.047.848a.75.75 0 0 1-.98-.98l.848-2.047a2.75 2.75 0 0 1 .596-.892l7.262-7.261Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      );
    case IconName.View:
      return (
        <button className="icon-button" role={IconName.View}>
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </button>
      );
      case IconName.Empty:
        return (
          <button className="icon-button">
          </button>
        );
  }
}

export default IconButton
