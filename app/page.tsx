import WidgetFilters from "./components/WidgetFilters";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <div className="container flex justify center">
        <WidgetFilters />
      </div>
    </div>
  );
}
