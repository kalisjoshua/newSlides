Get Git : CLI
=============

---

# Elightenment Within

---

## Agenda

  1. Getting Started
  2. Working Locally
  3. Sharing Changes

---

## Terms

  - branch
  - commit
  - fork
  - origin
  - remote
  - repository
  - stage
  - upstream
  - working directory

---

## Getting Started

  1. Starting your own repository
  2. Working with others

---

### Getting Started: Starting Your Own Repository

  1. `git init`
  2. Create a `.gitignore` file
  3. `git add .gitignore`
  4. `git commit -am "initial commit"`

---

### Getting Started: Working With Others

  1. `git clone -o upstream <git_url>`
  2. `cd <repository_name>`

---

## Working Locally

  0. Define your work (set of changes)
  1. Create a branch to work on
  2. Commit changes early and often

---

### Working Locally: Create A Branch

  1. `git branch <branchname>`
  2. `git checkout <branchname>`

...or:

  1. `git checkout -b <branchname>`

---

### Working Locally: Commit Changes

  1. Make changes
  2. `git add <files>`
  3. `git commit -m "enter commit message here"`
  4. goto 1

...or:

  1. Make changes
  2. `git commit -am "enter commit message here"`
  3. goto 1 - also known as "profit"

---

