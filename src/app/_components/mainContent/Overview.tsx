import { Switch } from "@/components/ui/switch";

const Overview = () => {
  return (
    <div className="bg-green-700 rounded-md flex justify-between items-center p-5 text-white">
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold">UI Designer in Egypt</h3>
        <p>70 job positions</p>
      </div>
      <div className="flex gap-3">
        <span>Set alert</span>
        <Switch />
      </div>
    </div>
  );
};
export default Overview;