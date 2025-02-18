// Settings.jsx
import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 bg-[#E5E7EB] min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Settings</h2>
        <p className="text-gray-600">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side (2 columns) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <Panel title="Account Settings">
            <div className="space-y-4">
              <InputField label="Email Address" defaultValue="john@example.com" />
              <InputField label="Full Name" defaultValue="John Doe" />
            </div>
          </Panel>

          {/* Summary Preferences */}
          <Panel title="Summary Preferences">
            <div className="space-y-4">
              <SelectField label="Default Summary Length" options={["Short", "Medium", "Long"]} />
              <SelectField label="Summary Style" options={["Bullet Points", "Paragraph", "Structured"]} />
            </div>
          </Panel>

          {/* Notification Settings */}
          <Panel title="Notification Settings">
            <ToggleItem
              title="Email Notifications"
              description="Receive notifications when summaries are ready"
              enabled
            />
            <ToggleItem
              title="Processing Updates"
              description="Get notified about document processing status"
              enabled={false}
            />
          </Panel>
        </div>

        {/* Right side (1 column) */}
        <div className="space-y-6">
          <Panel title="Storage Usage">
            <div className="space-y-4">
              <StorageBar used={75} total="10 GB" current="7.5 GB" />
              <button className="w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100">
                Upgrade Storage
              </button>
            </div>
          </Panel>

          <Panel title="Danger Zone">
            <div className="space-y-4">
              <button className="w-full px-4 py-2 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100">
                Delete Account
              </button>
              <button className="w-full px-4 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100">
                Clear All Data
              </button>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
};

const Panel = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg border p-6">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

const InputField = ({ label, defaultValue }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <input
      type="text"
      defaultValue={defaultValue}
      className="w-full px-3 py-2 border rounded-lg focus:outline-none"
    />
  </div>
);

const SelectField = ({ label, options }) => (
  <div>
    <label className="block text-sm font-medium mb-1">{label}</label>
    <select className="w-full px-3 py-2 border rounded-lg focus:outline-none">
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const ToggleItem = ({ title, description, enabled }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <button
      className={`relative inline-flex items-center h-6 w-11 rounded-full ${
        enabled ? "bg-blue-600" : "bg-gray-300"
      }`}
    >
      <span
        className={`transform inline-block w-4 h-4 rounded-full bg-white transition-all ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  </div>
);

const StorageBar = ({ used, total, current }) => (
  <div>
    <div className="flex mb-2 items-center justify-between">
      <span className="text-xs font-semibold text-blue-600">{used}% Used</span>
      <span className="text-xs font-semibold text-gray-600">
        {current} / {total}
      </span>
    </div>
    <div className="w-full bg-blue-100 h-2 rounded">
      <div className="bg-blue-500 h-2 rounded" style={{ width: `${used}%` }} />
    </div>
  </div>
);

export default Settings;
