import java.util.Scanner;

public class Palindrome {

    private static Scanner scan= new Scanner(System.in);
    public static void main(String[] args){
        System.out.println("enter String to be checked if palindrome");
        String userInputString = scan.nextLine();
        int j=userInputString.length()-1;
        boolean isPalindrome= true;
        for (int i=0; i<userInputString.length(); i++){
            if(j==i){
                break;
            }
            else{
                if(userInputString.charAt(i)==userInputString.charAt(j)){

                }
                else{
                    isPalindrome=false;
                }
            }
            j--;
        }
        if(isPalindrome){
            System.out.println(userInputString + " is a palindrome ");
        }
        else{
            System.out.println(userInputString+" is not a palindrome");
        }
    }
}
