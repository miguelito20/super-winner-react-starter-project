import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
{/*This creates a partial rendering where we will keep the navigation static and load the pages/subpages into this view */}
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<SideNav />
				{/* This is the navigation bar displaying the children links */}
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
			{/* This is what displays the content of the children for this page repo */}
		</div>
	);

}