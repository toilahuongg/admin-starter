import { PencilSquareIcon, DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { IconButton } from '@material-tailwind/react';
import DataTable from '@src/components/DataTable';
import { Role } from '../../types';

type RoleItem = {
  role: Role;
  isAccessWrite: boolean;
  onDelete: () => void;
};
const RoleItem: React.FC<RoleItem> = ({ role, isAccessWrite, onDelete }) => {
  const { _id, name, desc } = role;
  const router = useRouter();
  return (
    <DataTable.Row className="group">
      <DataTable.Cell className="w-4"> {_id}</DataTable.Cell>
      <DataTable.Cell> {name}</DataTable.Cell>
      <DataTable.Cell> {desc}</DataTable.Cell>
      {isAccessWrite && (
        <DataTable.Cell className="flex justify-end gap-1 opacity-0 group-hover:opacity-100">
          <IconButton
            size="sm"
            variant="outlined"
            color="green"
            className="flex items-center gap-2"
            onClick={() => router.push('/admin/roles/' + _id)}
          >
            <PencilSquareIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
          <IconButton size="sm" variant="outlined" className="flex items-center gap-2">
            <DocumentDuplicateIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
          <IconButton size="sm" color="red" className="flex items-center gap-2" onClick={onDelete}>
            <TrashIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </DataTable.Cell>
      )}
    </DataTable.Row>
  );
};

export default RoleItem;
