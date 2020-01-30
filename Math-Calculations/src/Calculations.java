import java.util.ArrayList;
import java.math.BigDecimal;
import java.sql.*;

public class Calculations {

	double tempChangePerSec;
	double difference;
	boolean b;
	
	//Takes all appliance Watts and hours running per day, estimates daily price.
	public double calculateCost(int applianceWatts[], double applianceHours[]){
		double total = 0;		
		for(int i = 0; i < applianceWatts.length; i++){
			total += (applianceWatts[i] * applianceHours[i]) / 1000 * 0.12;
			System.out.println("Current total is: " + total);
		}
		return total;
	}	
	
	//Method with calculations of how to calculate the temperature change while the doors/windows are not open.
	public void tempHouseSealed(double houseTemp, double outsideTemp){
		if(houseTemp > outsideTemp){
			b = false;
			difference = houseTemp - outsideTemp;
			tempChangePerSec = difference *  (1.0/1800.0); // 10 degrees per hour = 1 degree every 1800 seconds
			startTempChangeTimer(tempChangePerSec, houseTemp, b);			
		}
		else{
			b = true;
			difference = outsideTemp - houseTemp;
			tempChangePerSec = difference * (1.0/1800.0);
			startTempChangeTimer(tempChangePerSec, houseTemp, b);
		}
	}
	
	//Method with calculations of how to calculate the temperature change while a door is open.
	public void tempDoorOpen(double houseTemp, double outsideTemp){
		if(houseTemp > outsideTemp){
			b = false;
			difference = houseTemp - outsideTemp;
			tempChangePerSec = difference *  (1.0/150.0); //2 degrees per 5 minutes = 1 degree every 150 seconds
			System.out.println("TCPS: " + tempChangePerSec);
			startTempChangeTimer(tempChangePerSec, houseTemp, b);			
		}
		else{
			b = true;
			difference = outsideTemp - houseTemp;
			System.out.println("Difference is: " + difference);
			tempChangePerSec = difference * (1.0/150.0);
			System.out.println("TCPS: " + tempChangePerSec);
			startTempChangeTimer(tempChangePerSec, houseTemp, b);
		}		
	}	
	
	//Method with calculations of how to calculate the temperature change while a window is open.
	public void tempWindowOpen(double houseTemp, double outsideTemp){
		if(houseTemp > outsideTemp){
			b = false;
			difference = houseTemp - outsideTemp;
			tempChangePerSec = difference *  (1.0/300.0); //1 degrees per 5 minutes = 1 degree every 300 seconds
			System.out.println("TCPS: " + tempChangePerSec);
			startTempChangeTimer(tempChangePerSec, houseTemp, b);			
		}
		else{
			b = true;
			difference = outsideTemp - houseTemp;
			tempChangePerSec = difference * (1.0/300.0);
			System.out.println("TCPS: " + tempChangePerSec);
			startTempChangeTimer(tempChangePerSec, houseTemp, b);
		}		
	}
	
	//Hoping to do this one of two ways, have a timer that ticks every second and checks that no windows
	//or doors have been opened or closed, or the other option was to have a timer for 30 second intervals 
	//that updates temperature each second while app is active. This is to accomodate the 30 second estimate 
	//of door/window openings. Boolean value determines if temperature goes up with true value, or down with false.
	public void startTempChangeTimer(double tempChangePerSecond, double houseTemperature, boolean upOrDown){
		if(upOrDown == true){
			//Each Second raise houseTemperature by tempChangePerSecond
			System.out.println("Temperature is rising by " + tempChangePerSecond + " each second from the current house temp of " + houseTemperature + ".");
		}
		else{
			//Each second lower houseTemperature by tempChangePerSecond
			System.out.println("Temperature is lowering by " + tempChangePerSecond + " each second from the current house temp of " + houseTemperature + ".");
		}
		//Exit after 30 seconds. 
	}
	//Temporary test method to print out results of appliance usage cost.
	public void printResults(double totes){
		System.out.println("The total cost for each day is estimated at: " + totes);
		System.out.println();
	}
}
