'use client';
import { PageHeading } from '@/components/PageHeading';
import { SettingsForm } from '@/components/SettingsForm';

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeading title="Settings" />
      <SettingsForm />
    </div>
  );
}
