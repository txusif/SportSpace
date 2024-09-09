import { Button } from "./ui/button";

interface FilterButtonProps {
  filter: string;
  activeFilter: string;
  handleFilter: (filter: string) => void;
  children: React.ReactNode;
}

const FilterButton = ({
  filter,
  activeFilter,
  handleFilter,
  children,
}: FilterButtonProps) => {
  return (
    <Button
      variant={filter === activeFilter ? "default" : "outline"}
      size="default"
      onClick={() => handleFilter(filter)}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
