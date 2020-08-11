import java.util.*;
//코드는 올렸지만 사실 이건....시간초과 코드다 ! 조만간 바꾸자@_@
public class Main {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int next = sc.nextInt();
        int [] intArr = new int[next];
        
        for(int i = 0; i< next; i++) {
            intArr[i] = sc.nextInt();
        }
        Arrays.sort(intArr);
        
         for(int i = 0; i< next; i++) {
            System.out.println(intArr[i]);
        }
    }
}