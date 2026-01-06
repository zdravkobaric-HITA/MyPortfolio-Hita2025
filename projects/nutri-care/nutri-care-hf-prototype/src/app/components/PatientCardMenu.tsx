import { EllipsisVertical, Eye, Pencil, MessageCircle, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

interface PatientCardMenuProps {
  onViewProfile: () => void;
  onEditPatient: () => void;
  onSendMessage: () => void;
  onRemovePatient: () => void;
}

export default function PatientCardMenu({
  onViewProfile,
  onEditPatient,
  onSendMessage,
  onRemovePatient,
}: PatientCardMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 right-3 w-8 h-8 rounded-md flex items-center justify-center bg-transparent hover:bg-gray-50 transition-colors z-10"
        >
          <EllipsisVertical size={20} className="text-gray-600" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[200px] bg-white border border-gray-100 rounded-lg shadow-lg p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenuItem
          onClick={(e) => {
            e.stopPropagation();
            onViewProfile();
          }}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
        >
          <Eye size={20} style={{ color: '#1E3A5F' }} />
          <span className="text-sm" style={{ color: '#1F2937' }}>
            View Profile
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={(e) => {
            e.stopPropagation();
            onEditPatient();
          }}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
        >
          <Pencil size={20} style={{ color: '#1E3A5F' }} />
          <span className="text-sm" style={{ color: '#1F2937' }}>
            Edit Patient
          </span>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={(e) => {
            e.stopPropagation();
            onSendMessage();
          }}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 rounded-md transition-colors"
        >
          <MessageCircle size={20} className="text-gray-600" />
          <span className="text-sm" style={{ color: '#1F2937' }}>
            Send Message
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2 bg-gray-100" />

        <DropdownMenuItem
          onClick={(e) => {
            e.stopPropagation();
            onRemovePatient();
          }}
          className="flex items-center gap-3 px-4 py-3 cursor-pointer rounded-md transition-colors"
          style={{
            color: '#E67E73',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(230, 126, 115, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Trash2 size={20} style={{ color: '#E67E73' }} />
          <span className="text-sm" style={{ color: '#E67E73' }}>
            Remove Patient
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
