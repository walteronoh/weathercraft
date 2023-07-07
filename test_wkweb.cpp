#include <gtest/gtest.h>
#include "wkweb.h"

TEST(WkWebTest, TestGetTitle) {
  WkWeb wkweb("https://www.google.com");
  std::string title = wkweb.getTitle();
  EXPECT_EQ(title, "Google");
}

TEST(WkWebTest, TestGetDescription) {
  WkWeb wkweb("https://www.google.com");
  std::string description = wkweb.getDescription();
  EXPECT_EQ(description, "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.");
}

int main(int argc, char **argv) {
  testing::InitGoogleTest(&argc, argv);
  return RUN_ALL_TESTS();
}
