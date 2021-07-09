import { Button } from './Button';

interface GenreResponseProps {
  genre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  },
  handleClickButton: any;
  selectedGenreId: number;
}

export function SideBar(props: GenreResponseProps) {
  console.log(props.selectedGenreId)
  return (
    <Button
      key={String(props.genre.id)}
      title={props.genre.title}
      iconName={props.genre.name}
      selected={props.selectedGenreId === props.genre.id}
      onClick={() => props.handleClickButton(props.genre.id)}
    />
  )
}