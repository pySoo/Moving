import { AiOutlineSearch } from 'react-icons/ai';

type SearchIconProps = {
  size?: number;
};
export default function SearchIcon({ size }: SearchIconProps) {
  return <AiOutlineSearch size={size ?? 20} />;
}
