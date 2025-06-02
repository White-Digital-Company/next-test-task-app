import Dashboard from '@/components/Dashboard';
import PageHeader from '@/components/PageHeader';

export default function DashboardPage() {
    return (
        <div className="py-10 px-8 bg-[#F7F9FD] flex-1">
            <PageHeader title="My Tasks" />
            <Dashboard />
        </div>
    );
}
