import { Item } from "../types/Element";

export const Task = ({ item }: Item) => {
    return (
        <li key={item} className="my-2">{ item }</li>
    );
}