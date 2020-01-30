
public class TeamProjectMain {

	public static void main(String[] args) {
		/*
		TOTAL WATT USAGE FORMULA FOR M-F
		o	(HVAC(TBD)) + (Refrigerator 150W * 24hr) + (Lightbulbs 60W * 12hr) + (Bath Fan 30W * 2hr) + 
		(Microwave 1100W * (20/60)hr) + (WaterHeater 4500W * (440/60)hr) + (Stove 3500 * (15/60)hr) + 
		(Oven 4000W * (45/60)hr) + (LivingRoomTV 636W * 4hr) + (BedroomTV 100W * 2hr) + (Dishwasher 1800W * (45/60)hr)
		+ (Clothes Washer 500W * (30/60)hr) + (Clothes Dryer 3000W * (30/60)hr) * 0.12 = TOTAL AVERAGE M-F usage
		*/
		
		/*
		TOTAL WATT USAGE FORMULA FOR S-S
		o	(HVAC(TBD)) + (Refrigerator 150W * 24hr) + (Lightbulbs 60W * 12hr) + (Bath Fan 30W * 2hr) + (Microwave 1100W * (30/60)hr)
		+ (WaterHeater 4500W * (660/60)hr) + (Stove 3500 * (30/60)hr) + (Oven 4000W * (60/60)hr) + (LivingRoomTV 636W * 8hr) + 
		(BedroomTV 100W * 4hr) + (Dishwasher 1800W * (45/60)hr) + (Clothes Washer 500W * (30/60)hr) + 
		(Clothes Dryer 3000W * (30/60)hr) = TOTAL AVERAGE M-F usage
		 */
		
		// Would like to do this from a database and import the data, hardcode for now
		Calculations calc = new Calculations();
		//Watts of all the appliances.
		int watts[] = new int[] {3500, 150, 60, 30, 1100, 4500, 3500, 4000, 636, 100, 1800, 500, 3000};
		//Hours the appliances are used.
		double hoursUsedSS[] = new double[] {10, 24, 12, 2, 0.5, 11, 0.5, 1, 8, 4, 0.75, 0.5, 0.5};
		double hoursUsedMF[] = new double[] {6, 24, 12, 2, 0.33, 7.33, 0.25, 0.75, 4, 2, 0.75, 0.5, 0.5};
		
		double costMF = calc.calculateCost(watts, hoursUsedMF);
		double costSS = calc.calculateCost(watts, hoursUsedSS);
		
		calc.printResults(costMF);
		calc.printResults(costSS);	
		
		//Temperature checks
		double houseTemp = 80.0;
		double outsideTemp = 90.0;
		double outsideTemp2 = 70.0;
		
		calc.tempHouseSealed(houseTemp, outsideTemp);
		calc.tempDoorOpen(houseTemp, outsideTemp);
		calc.tempWindowOpen(houseTemp, outsideTemp);
		
		System.out.println("");
		System.out.println("House Temp 2.");
		calc.tempHouseSealed(houseTemp, outsideTemp2);
		calc.tempDoorOpen(houseTemp, outsideTemp2);
		calc.tempWindowOpen(houseTemp, outsideTemp2);
			
	}
}
