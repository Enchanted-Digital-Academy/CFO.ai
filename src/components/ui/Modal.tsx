type ModalProps = {
  title: string;
  message: string;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({
  title,
  message,
  isOpen,
  onClose,
}: ModalProps) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">

      <div className="w-full max-w-md rounded-xl bg-zinc-900 p-6 shadow-lg">

        <h2 className="text-2xl font-bold text-yellow-400">
          {title}
        </h2>

        <p className="mt-3 text-zinc-300">
          {message}
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black hover:bg-yellow-500"
        >
          Close
        </button>

      </div>
    </div>
  );
};

export default Modal;