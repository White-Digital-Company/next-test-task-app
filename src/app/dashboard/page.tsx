import Dashboard from '@/components/Dashboard';
import PageHeader from '@/components/PageHeader';

export default function DashboardPage() {
    return (
        <div className="py-10 px-8 bg-[#F7F9FD] flex-1 flex flex-col overflow-hidden">
            <PageHeader title="My Tasks" />
            <div className="flex-1 min-h-0 overflow-x-auto">
                <Dashboard />
            </div>
        </div>
    );
}
