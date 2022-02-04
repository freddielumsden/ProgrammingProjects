#include <iostream>
#include <cmath>
#include <stdlib.h>
#include <windows.h>
#include <conio.h>
using namespace std;

void ShowConsoleCursor(bool showFlag)
{
    HANDLE out = GetStdHandle(STD_OUTPUT_HANDLE);

    CONSOLE_CURSOR_INFO cursorInfo;

    GetConsoleCursorInfo(out, &cursorInfo);
    cursorInfo.bVisible = showFlag; // set the cursor visibility
    SetConsoleCursorInfo(out, &cursorInfo);
}

int main(void)
{
    char board[3][3] = {{' ', ' ', ' '}, {' ', ' ', ' '}, {' ', ' ', ' '}};
    int position;
    bool xturn = true;
    char turn = 'X';

    ShowConsoleCursor(false);

    while (true)
    {
        system("CLS");
        cout << "     |     |     " << endl;
        cout << "  " << board[0][0] << "  |  " << board[0][1] << "  |  " << board[0][2] << "  " << endl;
        cout << "_____|_____|_____" << endl;
        cout << "     |     |     " << endl;
        cout << "  " << board[1][0] << "  |  " << board[1][1] << "  |  " << board[1][2] << "  " << endl;
        cout << "_____|_____|_____" << endl;
        cout << "     |     |     " << endl;
        cout << "  " << board[2][0] << "  |  " << board[2][1] << "  |  " << board[2][2] << "  " << endl;
        cout << "     |     |     " << endl;
        cout << "Where would you like to go (1 - 9): ";
        position = (int)_getch();
        switch (position)
        {
        case 1:
            board[0][0] = turn;
            break;
        case 2:
            board[0][1] = turn;
            break;
        case 3:
            board[0][2] = turn;
            break;
        case 4:
            board[1][0] = turn;
            break;
        case 5:
            board[1][1] = turn;
            break;
        case 6:
            board[1][2] = turn;
            break;
        case 7:
            board[2][0] = turn;
            break;
        case 8:
            board[2][1] = turn;
            break;
        case 9:
            board[2][2] = turn;
            break;
        default:
            cout << endl << "That's an Invalid Move!" << endl;
            Sleep(2000);
        }
        xturn ^= true;
        if (xturn)
        {
            turn = 'X';
        } else
        {
            turn = 'O';
        }
        
    }
    return 0;
}