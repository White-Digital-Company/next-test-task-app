import PageHeader from '@/components/PageHeader';
import SavePasswordForm from '@/features/user/components/SavePasswordForm';
import UserSideBar from '@/features/user/components/UserSideBar';

export default function SettingsPage() {
    return (
        <div className="bg-bgPage flex-1 flex ">
            <div className="flex-1 py-10 px-8">
                <PageHeader title="Settings" />
                <SavePasswordForm />
            </div>
            <UserSideBar />
        </div>
    );
}
