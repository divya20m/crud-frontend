import { Lists } from './Lists';
import { AddList } from './AddList';

function ParentComponent() {
  const [lists, setLists] = useState([]);

  return (
    <div>
      <AddList lists={lists} setLists={setLists} />
      <Lists lists={lists} setLists={setLists} />
    </div>
  );
}
