#include <iostream>
#include <string>
#include <cstdlib>
using namespace std;

string next_letter(string password, string characters)
{
    
    while (true)
    {
        int num = 0;
        char last_letter = password.back();
        password.pop_back();
        if (last_letter == '9')
        {
            num += 1;
        } else
        {
            break;
        }
    }
    return password + characters[characters.find(last_letter) + 1];
    /*if (characters[characters.find(password.back())] == '9' or password == "")
    {
        return "a";
    }
    else
    {
        
        char next_char = characters[characters.find(password.back()) + 1];
        string temp_password = password;
        temp_password.pop_back();
        return temp_password + next_char;
    }*/
}
int main()
{
    string password = "aaaaaaa";
    string characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    int characters_length = characters.length();

    while (1)
    {
        password = next_letter(password, characters);
        cout << password << endl;
    }
}