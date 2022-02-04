import java.util.Scanner;
public class Fibannaci{
    private static Scanner scan = new Scanner(System.in);
    public static void main(String[] args){
        int previousOne =0;
        int previousTwo =1;
        System.out.println("enter how many fibanacci number u want to see ");
        int userInput = scan.nextInt();
        int fibannaci=0;
        for(int i=0; i <userInput; i++){
            if(i==0){
                System.out.println("Number is for "+1+" is 0" );
                fibannaci=0;
            }
            else if(i==1){
                System.out.println("Number is for "+2 +" is 1" );
                fibannaci=1;
            }
            else{int temp= fibannaci;
            fibannaci=previousOne+previousTwo;
            previousOne=previousTwo;
            previousTwo=fibannaci;
            System.out.println("Number is for "+i+" is " +fibannaci);
                
        }
            
        }
    }
}