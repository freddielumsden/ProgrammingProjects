#include <iostream>
#include <stdlib.h>
#include <cstring>
using namespace std;

string getLine()
{
    cout << ">>> ";
    string line;
    cin >> line;
    return line;
}
string determineLineMotive(string line)
{
    int len = strlen(line);
    for (int i = 0; i < len; i++)
    {

    }
    return "";
}
class Variable 
{
    public:
        string type;
        string identifier;
        string value;
};

int main()
{
    cout << "Programming Language Interpreter\n";
    string line;
    while (true)
    {
        line = getLine();
        if (line == "exit")
        {
            break;
        } else
        {
            string motive = determineLineMotive(line);
        }
    }

    return 0;
}