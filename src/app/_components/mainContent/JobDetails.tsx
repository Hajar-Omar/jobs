import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobPost from "./JobPost";
import PaginationItem from "./PaginationItem";
import { IJobPost } from "@/types";
import { jobPost } from "@/constants";
import Overview from "./Overview";

const JobDetails = () => {
  // const [isSliderVisible, setSliderVisible] = useState(true);
  // const toggleSlider = () => {
  // 	setSliderVisible(!isSliderVisible);
  // };

  return (
    <section className="flex flex-col gap-2.5 lg:pt-5">
      <div className="flex flex-row-reverse items-center gap-2">
        <Select>
          <SelectTrigger className="w-[100px] text-green-600 border-none bg-transparent p-0 h-fit gap-2">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top-match">Top match</SelectItem>
            <SelectItem value="job">Job</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <span className="text-sm">Sorting by: </span>
      </div>
      <Overview />
      {jobPost.map((item: IJobPost, index: number) => (
        <JobPost
          key={index}
          isActive={item.isActive}
          companyImage={item.companyImage}
          jobTitle={item.jobTitle}
          jobLocation={item.jobLocation}
          postJobDate={item.postJobDate}
          companyName={item.companyName}
          yearExperience={item.yearExperience}
          jobType={item.jobType}
          jobLocal={item.jobLocal}
          relativeTracks={item.relativeTracks}
        />
      ))}
      <div className="flex justify-center items-center gap-3 md:hidden">
        <PaginationItem label="&lt;" />
        <PaginationItem label="1" />
        <PaginationItem label="2" isActive />
        <PaginationItem label="3" />
        <PaginationItem label="&gt;" />
      </div>
    </section>
  );
};

export default JobDetails;
