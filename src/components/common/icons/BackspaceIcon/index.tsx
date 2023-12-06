import { IoIosBackspace } from 'react-icons/io';

type BackspaceIconProps = {
  size?: number;
};
export default function BackspaceIcon({ size }: BackspaceIconProps) {
  return <IoIosBackspace size={size ?? 20} />;
}
