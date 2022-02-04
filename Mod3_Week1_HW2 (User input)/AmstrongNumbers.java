import java.util.Scanner;

public class AmstrongNumbers {
   private static Scanner scanner = new Scanner(System.in);
    public static void main(String[] args){
        System.out.println("Enter number to be checked for amstrong numbers");
        String number = scanner.nextLine();
        int sum=0;
        for(int i=0; i<number.length(); i++){
           
            sum+=Math.pow(Character.getNumericValue(number.charAt(i)),number.length());
            
        }
        
        if(Integer.parseInt(number)==sum){
            System.out.println(number+" is a Amstrong Number");
        }
        else{
            System.out.println(number+" is not a Amstrong Number");
        }
    }
}
