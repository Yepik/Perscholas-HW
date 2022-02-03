import java.util.Scanner;
public class Mainhw {
    private static Scanner myObj = new Scanner(System.in);
    public static void main(String[] args){
        Exercise1();
        Exercise2();
        Exercise3();
        
    }
    public static void Exercise1(){
        System.out.println("Write an if/else statement for the following requirements:");
        System.out.println("If student gets 90 or higher: console log  A");
        System.out.println("If students get 80 or above: console log B");
        System.out.println("If students get 70 or above: console log C");
        System.out.println("If students get 55 or above: console log D");
        System.out.println("Any grade lower than 55 is F");
        System.out.println("Enter grade");
        int grade=Integer.parseInt(myObj.nextLine());
        
            if (90<=grade){
                System.out.println("A");
                
            }
            else if( 80<=grade && grade<=90){
                System.out.println("B");
                
            }
            else if( 70<=grade && grade<80){
                System.out.println("C");
                
            }
            else if (55<=grade && grade<70){
                System.out.println("D");
                
            }
            else if (grade<55){
                System.out.println("F");
                
            }
            else {
                System.out.println("Something went wrong");
            }
            
        

    }
    public static void Exercise2(){
        System.out.println("Using switch case, do the following:");
        System.out.println("Store a number between 1-7");
        System.out.println("If the number is 1, display a message 'Monday', 2 for 'Tuesday', 3 for 'Wednesday' etc.");
        System.out.println("Anything other than 1-7 would default to 'Invalid Input'");
        System.out.println("Enter day");
        int day=Integer.parseInt(myObj.nextLine());
        switch(day){
            case 1:{
                System.out.println("Monday");
                break;
            }
            case 2:{
                System.out.println("Tuesday");
                break;
            }
            case 3:{
                System.out.println("Wednesday");
                break;
            }
            case 4:{
                System.out.println("Thursday");
                break;
            }
            case 5:{
                System.out.println("Friday");
                break;
            }
            case 6:{
                System.out.println("Saturday");
                break;
            }
            case 7:{
                System.out.println("Sunday");
                break;
            }
            default: {
                System.out.println("Something went wrong");
            }
            
        }
    }
    public static void Exercise3(){
        System.out.println("Store a number in a variable called num and write an if statement: ");
        System.out.println("If num is odd, display 'Cool'");
        System.out.println("If num is even and between 2-5, display 'Not Cool'");
        System.out.println("If num is even and between 6-20, display 'Cool'");
        System.out.println("If num is even and greater than 20, display 'Not Cool'");
        System.out.println("Enter number");
        int number=Integer.parseInt(myObj.nextLine());
        String msg = number%2==1?"Cool":(((number<5&&number>1)||(number>20))?"Not Cool":(( number>=6&&number<=20)?"Cool":"Something went wrong"));
        System.out.println(msg);
    }
    
}
