export const SidebarItem = ({ name, icon }) => {
  return (
    <div className="flex w-full h-8 items-center gap-6 text-neutral-900">
      {icon}
      {name}
    </div>
  );
};
