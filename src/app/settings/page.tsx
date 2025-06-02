import PageHeader from '@/components/PageHeader';
import SavePasswordForm from '@/components/SavePasswordForm';

export default function SettingsPage() {
    return (
        <div className="py-10 px-8 bg-[#F7F9FD] flex-1">
            <PageHeader title="Settings" />
            <SavePasswordForm />
        </div>
    );
}
