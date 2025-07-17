import DekFileExamples from "./DekFileExamples";
import RefDek from "../components/RefDek/RefDek";

function RefDekExamples(): RefDek[] {

  return [
    new RefDek(0, `All`, DekFileExamples('ALL')),
    new RefDek(1, `Zion's Guard`, DekFileExamples('ZION')),
    new RefDek(2, `One's Destine`, DekFileExamples('ONES')),
    new RefDek(3, `Avaddon's Swarm`, DekFileExamples('SWARM')),
  ]
};

export default RefDekExamples;