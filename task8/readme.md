**1.Generate SSH Key (if not already generated):

![Screenshot from 2025-02-04 16-05-16](https://github.com/user-attachments/assets/f35c8717-95c3-4554-b0cc-988be705b15f)

2.Create a repository on github account.

 ![Screenshot from 2025-02-04 16-07-29](https://github.com/user-attachments/assets/b022c478-0b09-47d0-854b-6330d5841eee)

 
3.Clone the above repository on your local from github. 

  ![Screenshot from 2025-02-04 16-18-31](https://github.com/user-attachments/assets/eb3f1133-01bc-4ba6-822e-36ce500f89a9)

4. Create a New File and Commit Changes



![Screenshot from 2025-02-04 16-15-36](https://github.com/user-attachments/assets/eeb38d03-1ddb-4330-9857-22d8f0a62b99)

5. Create Two Branches from main/master

![Screenshot from 2025-02-04 16-21-56](https://github.com/user-attachments/assets/0c6b7693-765b-4c62-947b-aac7ff07d4a2)

6. Resolve a Merge Conflict
    git checkout f1
    echo "Change from f1" >> test.txt
    git commit -am "Modified test.txt in f1"

    git checkout f2
    echo "Change from f2" >> test.txt
    git commit -am "Modified test.txt in f2"

7.Show how divergence occurs in a branch.

![Screenshot from 2025-02-04 16-31-34](https://github.com/user-attachments/assets/95e73dce-0846-4065-9b97-6d262e9652c2)

 8.Difference between git init and git clone
 git init	Initializes a new Git repository in an existing directory. Used to start version control from scratch.
 git clone <repo_url>	Copies (clones) an existing remote repository to your local system. It automatically sets up the remote origin.

 9.Difference between git branch and git checkout.
 
  git branch <branch-name>	Creates a new branch but does not switch to it.
  git checkout <branch-name>	Switches to an existing branch.
  git checkout -b <branch-name>	Creates a new branch and switches to it in a single command.

 10. Difference between git fetch and git pull.

     git fetch	Downloads changes from the remote repository but does not merge them.
     git pull	Fetches and automatically merges the changes into the current branch.
     
 11.How to Squash Commits?
 
  git rebase -i HEAD~3  # Squash the last 3 commits

 12.Difference between git reset and git revert
 
  git reset --hard HEAD~1  # Deletes the last commit (permanently removes changes)
  git reset --soft HEAD~1  # Removes the commit but keeps changes staged

13.Delete a Branch from Local and Remote

git branch -d branch-name  # Safe delete (only if fully merged)
git branch -D branch-name  # Force delete (even if not merged)

Delete a remote branch:

git push origin --delete branch-name








