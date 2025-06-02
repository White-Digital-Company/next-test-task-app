import PageHeader from '@/components/PageHeader';
import SavePasswordForm from '@/components/SavePasswordForm';
import UserSideBar from '@/components/UserSideBar';

export default function SettingsPage() {
    return (
        <div className="bg-[#F7F9FD] flex-1 flex ">
            <div className="flex-1 py-10 px-8">
                <PageHeader title="Settings" />
                <SavePasswordForm />
            </div>
            <UserSideBar />
        </div>
    );
}
