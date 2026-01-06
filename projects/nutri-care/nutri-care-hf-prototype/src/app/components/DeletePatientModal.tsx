import { useState } from 'react';
import { X, TriangleAlert, Minus, Trash2 } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';

interface DeletePatientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  patientName: string;
  onConfirm: () => void;
}

export default function DeletePatientModal({
  open,
  onOpenChange,
  patientName,
  onConfirm,
}: DeletePatientModalProps) {
  const [confirmName, setConfirmName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const isNameMatch = confirmName.trim().toLowerCase() === patientName.toLowerCase();

  const handleConfirm = async () => {
    if (!isNameMatch) return;
    
    setIsDeleting(true);
    
    // Simulate deletion delay
    setTimeout(() => {
      onConfirm();
      setIsDeleting(false);
      setConfirmName('');
    }, 2000);
  };

  const handleClose = () => {
    if (isDeleting) return;
    setConfirmName('');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[520px] p-8">
        {/* Close Button */}
        <button
          onClick={handleClose}
          disabled={isDeleting}
          className="absolute right-4 top-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-gray-100 p-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X size={20} className="text-gray-600" />
          <span className="sr-only">Close</span>
        </button>

        {/* Warning Icon with Pulse Animation */}
        <div className="flex justify-center">
          <div className="animate-pulse">
            <TriangleAlert size={56} style={{ color: '#E67E73' }} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center mt-6" style={{ color: '#1F2937' }}>
          Remove Patient?
        </h2>

        {/* Patient Name */}
        <p className="text-center mt-2" style={{ fontSize: '18px', fontWeight: 600, color: '#1E3A5F' }}>
          "{patientName}"
        </p>

        {/* Warning Message */}
        <div className="mt-4 text-center">
          <p className="text-base leading-6" style={{ color: '#1F2937' }}>
            This action cannot be undone. All associated data will be permanently deleted.
          </p>
        </div>

        {/* What Will Be Deleted List */}
        <div
          className="mt-6 rounded-lg p-4 border-l-[3px]"
          style={{
            backgroundColor: 'rgba(230, 126, 115, 0.05)',
            border: '1px solid rgba(230, 126, 115, 0.2)',
            borderLeft: '3px solid #E67E73',
          }}
        >
          <p className="text-sm font-semibold mb-3" style={{ color: '#1F2937' }}>
            The following data will be deleted:
          </p>
          <div className="space-y-2">
            {[
              'All meal plans and diet history',
              'All check-in records and progress data',
              'All messages and notes',
              'Patient profile information',
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Minus size={16} style={{ color: '#E67E73' }} />
                <span className="text-sm" style={{ color: '#1F2937' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Input */}
        <div className="mt-6">
          <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
            Type patient's name to confirm:
          </label>
          <input
            type="text"
            placeholder={patientName}
            value={confirmName}
            onChange={(e) => setConfirmName(e.target.value)}
            disabled={isDeleting}
            className="w-full h-11 px-4 border border-gray-300 rounded-lg focus:outline-none text-base disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderColor: confirmName && !isNameMatch ? '#E67E73' : '#D1D5DB',
              focusVisible: isNameMatch ? '2px solid #E67E73' : undefined,
            }}
          />
          {confirmName && !isNameMatch && (
            <p className="text-xs mt-1" style={{ color: '#E67E73' }}>
              Name doesn't match
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={handleClose}
            disabled={isDeleting}
            className="flex-1 h-11 rounded-lg border-2 font-medium hover:bg-opacity-5 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              borderColor: '#1E3A5F',
              color: '#1E3A5F',
              backgroundColor: 'transparent',
            }}
          >
            Keep Patient
          </button>
          <button
            onClick={handleConfirm}
            disabled={!isNameMatch || isDeleting}
            className="flex-1 h-11 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-all hover:opacity-90 disabled:cursor-not-allowed"
            style={{
              backgroundColor: !isNameMatch || isDeleting ? '#D1D5DB' : '#E67E73',
              color: !isNameMatch || isDeleting ? '#6B7280' : 'white',
            }}
          >
            {isDeleting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Removing...
              </>
            ) : (
              <>
                <Trash2 size={20} />
                Remove Patient
              </>
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
