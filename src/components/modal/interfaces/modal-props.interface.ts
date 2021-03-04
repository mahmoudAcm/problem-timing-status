export interface ModalProps {
  show: boolean;
  code: string;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  addCode: React.Dispatch<React.SetStateAction<string[]>>;
}
