#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "p6 Test Square and Rectangle"}};
    ctx.start();
}