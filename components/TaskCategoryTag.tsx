
interface TaskCardProps {
    category: string;
  }

export function TaskCategoryTag({category}: TaskCardProps) {
    return <div className="px-2 rounded-full border">{category}</div>
}